from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.SimpleRouter()
router.register('users', views.UserAPIViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
