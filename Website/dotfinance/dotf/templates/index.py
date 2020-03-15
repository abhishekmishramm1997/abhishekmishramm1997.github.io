import tornado.ioloop
import tornado.web
from pymongo import MongoClient


class basicRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html",items=[])
        return
    
    def post(self):
        search_query = self.get_argument('search_box')
        search_dict = {"20TH CENTURY INDUSTRIES": search_query}

        sync_db = MongoClient().acme
        collection = sync_db.products

        search_results = collection.find(search_dict)
        
        all_results = []
        for each_result in search_results:
            all_results.append(each_result)

        self.render("index.html",items=all_results)
        return


class staticRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")


if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/", basicRequestHandler),
        (r"/blog", staticRequestHandler)

    ],
    debug=True)
    
    application.listen(8881)
    tornado.ioloop.IOLoop.current().start()