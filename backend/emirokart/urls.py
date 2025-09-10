from django.contrib import admin
from django.urls import path
from accounts.views import UserListView, RegisterView, ProfileView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", UserListView.as_view(), name="user-list"),
    path("api/accounts/register/", RegisterView.as_view(), name="register"),
    path("api/accounts/profile/", ProfileView.as_view(), name="profile"),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)