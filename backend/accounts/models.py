from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True, unique=True)
    address = models.TextField(blank=True, null=True)
    is_customer = models.BooleanField(default=True)
    is_seller = models.BooleanField(default=False)

    def __str__(self):
        return self.username
