from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('stocks', views.stocks),
	path('discussions', views.discussions),
	path('news', views.news),
	path('team', views.team),
	path('contact', views.contact),
	path('review', views.review),
	path('join',views.join),
	path('beta', views.beta),
	path('profile', views.profile),
	path('login', views.login),
	path('article', views.article),
	path('discussion', views.discussion),
	path('analysis', views.analysis),
	path('about', views.about),
	path('details', views.details),
	path('privacy', views.privacy),
	path('search', views.search),
	path('terms', views.terms),
	path('market', views.market),
	path('industry', views.industry),
	path('ind_analysis', views.ind_analysis),
]