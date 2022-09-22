from rest_framework.viewsets import ModelViewSet
from . import models, serializers


class UserAPIViewSet(ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = models.CustomUser.objects.all()
