import requests
import os
# 1. 英雄列表
# 2. 每个英雄获取 皮肤并下载下来


class Heros(object):
    def __init__(self):
        self.start_url = 'https://lol.qq.com/biz/hero/champion.js'
        self.headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"}

    def get_hero_list(self, heros_js):
        # https://lol.qq.com/biz/hero/champion.js  获取所有的英雄列表
        hero = heros_js.split('"keys":')[1].split(',"data":')[0]
        hero_dict = eval(hero)
        hero_list = list(hero_dict.values())
        with open('hero_list.txt', 'w', encoding='utf-8') as f:
            f.write(str(hero_list))
        return hero_list

    def get_hero(self, hero_url):
        hero_res = requests.get(hero_url, headers=self.headers).content.decode()
        hero = eval(hero_res.split('"data":')[1].split(',"version"')[0].replace('true', 'True').replace('false', 'False'))
        return hero

    def down_load_skin(self, hero):
        # 生成目录
        isExists = os.path.exists(hero['name'])
        if not isExists:
            os.mkdir(hero['name'])
        else:
            print(hero['name'] + ' 目录已存在')
        os.chdir(hero['name'])

        hero_skins = hero['skins']
        for hero_skin in hero_skins:
            url = 'https://ossweb-img.qq.com/images/lol/web201310/skin/big{}.jpg'.format(hero_skin['id'])
            img_res = requests.get(url, headers=self.headers)

            with open('{}.jpg'.format(hero_skin['name']), 'wb') as f:
                f.write(img_res.content)
        os.chdir('../')


    def run(self):
        # 1. 获取初始网页内容
        res = requests.get(self.start_url, headers=self.headers)
        heros_js = res.content.decode()

        # 2. 返回的res是一个str类型，通过剪切获取到所有的英雄列表
        heros_list = self.get_hero_list(heros_js)

        # 3. 遍历英雄列表，获取每一个英雄的图片网址
        for hero in heros_list:
            try:
                print('解析{}'.format(hero))
                hero_url = 'https://lol.qq.com/biz/hero/' + hero + '.js'

                # 4. 获取当前英雄
                hero = self.get_hero(hero_url)

                # 5. 下载图片
                self.down_load_skin(hero)

            except Exception as e:
                with open('error.txt', 'a', encoding='utf-8') as f:
                    f.write("错误1次")


if __name__ == '__main__':
    heros = Heros()
    heros.run()




