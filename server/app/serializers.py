from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        # 利用しないモデルのフィールドを指定
        exclude = ['password', 'last_login', 'is_active']
        # 読み込み専用フィールドを指定
        read_only_fields = ['created_at']
