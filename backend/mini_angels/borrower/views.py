# from .models import MigrateOperations, ValueTypes
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import (
    BorrowerProfile
)

@api_view(["POST"])
def save_profile(request):
    first_name       = request.data.get("first_name")
    last_name        = request.data.get("last_name")
    education        = request.data.get("education")
    employment_type  = request.data.get("employment_type")
    monthly_income   = request.data.get("monthly_income")

    BorrowerProfile().save(first_name,
                           last_name,
                           education,
                           employment_type,
                           monthly_income)

    try:
        print(first_name, last_name)
    except Exception as err:
        err_msg = "Failed to generate data values file - {}".format(err)
        return Response({"message": err_msg}, status=500)

    return Response({"message": "Saved user profile"})