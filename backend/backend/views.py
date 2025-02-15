from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import aauthenticate, alogin


class CsrfView(APIView):
    permission_classes = []

    @method_decorator(ensure_csrf_cookie)
    def get(self, request):
        return Response({'success': 'CSRF cookie set'})

class LoginView(APIView):
    permission_classes = []

    async def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = await aauthenticate(request, username=username, password=password)
        if user is not None:
            await alogin(request, user)
            return Response({'success': 'Login successful'})
        else:
            return Response({'error': 'Login failed'}, status=400)