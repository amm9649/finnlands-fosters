from rest_framework import permissions

class IsAdoptableEditor(permissions.BasePermission):
	def has_permission(self, request, view):
		if request.user.groups.filter(name="AdoptableEditor").exists():
			return True
		return False