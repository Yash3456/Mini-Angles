from django.db import models

class BorrowerProfile(models.Model):
    class Meta:
        unique_together = (('mobile'),)

    mobile          = models.PositiveIntegerField()
    first_name      = models.CharField(max_length=100)
    last_name       = models.CharField(max_length=100)
    education       = models.CharField(max_length=100)
    employment_type = models.CharField(max_length=400)
    monthly_income  = models.PositiveIntegerField()

class OtpVerification(models.Model):
    class Meta:
        unique_together = (('mobile'),)

    mobile          = models.PositiveIntegerField()
    otp             = models.PositiveIntegerField()

class LoanApplication(models.Model):
    borrower  = models.PositiveIntegerField()
    amount    = models.CharField(max_length=100)
    period    = models.PositiveIntegerField()
    approval  = models.CharField(max_length=100)
    lender    = models.CharField(max_length=100)

