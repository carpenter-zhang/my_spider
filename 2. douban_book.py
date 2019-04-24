# 豆瓣图书的python
# https://book.douban.com/subject_search?search_text=python&start=0
# Python编程 : 从入门到实践, 评分, 出版时间,

import requests
from lxml import etree


class DoubanPythonSpider(object):
    def __init__(self):
        self.start_url = 'https://m.douban.com/j/search/?q=python&t=book&p=0'
        self.headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 "
                                      "(KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"}

    def start(self, url):
        response = requests.get(url, headers=self.headers)
        html = eval(response.content.decode())['html']
        return html

    def html_parse(self, html_str):
        html = etree.HTML(html_str)
        item_list = html.xpath("//li//div[@class='subject-info']")
        book_list = []

        for item in item_list:
            book = {}
            name = item.xpath("./span[@class='subject-title']/text()")[0]
            book['name'] = name

            rate_num = item.xpath(".//span[@class='rating-stars']/@data-rating")[0]
            rate_num = int(str(rate_num).split('.')[0]) / 10
            book['rate_num'] = rate_num

            book_list.append(book)

    def run(self):
        # 1. 连接
        html_str = self.start(self.start_url)

        # 2. 获取到数据,开始解析
        self.html_parse(html_str)


if __name__ == '__main__':
    dp = DoubanPythonSpider()
    dp.run()
