import requests
import os


class Cassiopeia(object):
    def __init__(self):
        self.start_url = 'https://lol.qq.com/biz/hero/Cassiopeia.js'
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"}

    def get_hero_img_url_list(self, hero_url):
        # 返回的是所有的信息的字典，需要在下一步进行处理
        hero_res = requests.get(self.start_url, headers=self.headers).content.decode()
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

    def run(self):

        print('解析{}'.format('Cassiopeia'))
        hero_url = 'https://lol.qq.com/biz/hero/Cassiopeia.js'

        # 4. 获取当前英雄
        hero = self.get_hero_img_url_list(hero_url)

        print(hero)
        # 5. 下载图片
        self.down_load_skin(hero)


if __name__ == '__main__':
    cassiopeia = Cassiopeia()
    cassiopeia.run()




