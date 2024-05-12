# from .models import MigrateOperations, ValueTypes
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sinch import SinchClient
import random

from .models import (
    OtpVerification,
    BorrowerProfile
)

@api_view(["POST"])
def verify_mobile(request):
    mobile       = request.data.get("mobile")
    BorrowerProfile().save(mobile,
                           "",
                           "",
                           "",
                           "",
                           0)

    try:
        otp = random.randint(1000,9999)

        sinch_client = SinchClient(
            key_id="ee760147-c140-40b5-8cba-07990988e6d4",
            key_secret="Nqiabmi8ylLRBWtdFtyczqgSGJ",
            project_id="a3528128-7c4f-47cc-85ba-f5dc0555b9a4"
        )

        mobile = "+91{}".format("9994421694")
        send_batch_response = sinch_client.sms.batches.send(
            body="Your Mini Angel verification code is: {}".format(otp),
            to=[mobile],
            from_="+447520651755",
            delivery_report="none"
        )

        OtpVerification().save(mobile, otp)

        print(send_batch_response)
    except Exception as err:
        err_msg = "Failed to send verification OTP - {}".format(err)
        return Response({"message": err_msg}, status=500)

    return Response({"message": "Sent verification OTP"})

@api_view(["POST"])
def verify_otp(request):
    mobile       = request.data.get("mobile")
    otp          = request.data.get("otp")

    try:
        otp_verifications = OtpVerification().query(mobile=mobile)
        otp_verified = False

        for otp_verification in otp_verifications:
            if otp == otp_verification["otp"]:
                otp_verified

        if otp_verified:
           Response({"message": "Successfully verified OTP"})

        OtpVerification().delete(mobile=mobile)
    except Exception as err:
        err_msg = "Failed to verify OTP - {}".format(err)
        return Response({"message": err_msg}, status=500)

    return Response({"message": "Invalid OTP"}, status=500)

@api_view(["POST"])
def save_profile(request):
    mobile           = request.data.get("mobile")
    first_name       = request.data.get("first_name")
    last_name        = request.data.get("last_name")
    education        = request.data.get("education")
    employment_type  = request.data.get("employment_type")
    monthly_income   = request.data.get("monthly_income")

    BorrowerProfile().save(mobile,
                           first_name,
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