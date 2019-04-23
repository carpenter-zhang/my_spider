import json
import requests
from lxml import etree
import time


class TowerSpider(object):
    def __init__(self):
        self.url = 'https://tower.im/teams/702810/projects/29/'
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Cookie": "_ga=GA1.2.885085269.1539502103; remember_token=966da2cf-65e9-41a9-b29b-4587a782dc21; remember_team_guid=bb2a0fecbfd249a08bba914705e221fc; Hm_lvt_e1fa918d304786452f7d6936febd93c6=1555503669; _tower2_session=cc0d00d4a9f4b902710b810c5165ff07; Hm_lpvt_e1fa918d304786452f7d6936febd93c6=1556024302; _gid=GA1.2.444593312.1556024303; intercom-session-xbtsuf77=TDM3cHlES3QvRFlDMVlIRkphSE9PN2NrTFNLQk51VGcxcWtUWlJsMHJzQkYwOHJkbFEvSS85SmxVQTR0cGp2Sy0tMUVZSWE2Ykp6VWUyV3Q3VWQvN01wUT09--384f6d14a9444890322155f14fc9472f4e727a19; _gat_teamTracker=1",
            "Host": "tower.im",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
        }

    def html_parse(self, response):
        # 1. 解析为HTML文档
        html_str = etree.HTML(response.content.decode())

        # 2.结果列表
        todo_list = html_str.xpath("//div[@class='kanban-todo-name']")
        # s = html_str.xpath("//input[@id='conn-guid']/@value")

        work_list = []
        for todo in todo_list:
            work = {}
            tag = todo.xpath("./a/text()")
            if len(tag) == 3:
                work['url'] = "https://tower.im/" + str(todo.xpath('../@todo-url'))[3:-1]
                work['machine_name'] = tag[0]
                work['type'] = tag[1]
                work['manage_name'] = tag[2]
                work_list.append(work)
        print(len(work_list))
        return work_list

    def get_time(self, work_list):
        i = 0
        for work in work_list:
            try:
                work_url = work['url']
                work_response = requests.get(work_url, headers=self.headers)

                work_html_str = etree.HTML(work_response.content.decode())
                start_time = work_html_str.xpath("//a[@data-created-at]/text()")[0]
                start_date = start_time.strip()[:10]
                work['start_date'] = start_date
                time.sleep(1)
                i += 1
                print(i, end=' ')
                print(work)
            except Exception as e:
                print("error")
                continue
        return work_list

    def run(self):

        # 1.获取网页
        response = requests.get(self.url, headers=self.headers)

        # 2.Xpath解析
        work_list = self.html_parse(response)

        # 3. 时间
        self.get_time(work_list)

        # 4.
        with open('todo.txt', 'a', encoding='utf-8') as f:
            f.write(str(work_list))


if __name__ == '__main__':
    tower = TowerSpider()
    tower.run()