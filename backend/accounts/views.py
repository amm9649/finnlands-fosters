from rest_framework.authentication import SessionAuthentication, TokenAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ProfileView(APIView):
	authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
	permission_classes = [IsAuthenticated]

	def get(self, request, format=None):
		content = {
			'email': str(request.user.email),
			'first_name': str(request.user.first_name),
			'last_name': str(request.user.last_name),
			'auth': str(request.auth),
		}
		return Response(content)