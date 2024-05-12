class BorrowerProfileFields:
    def __init__(self, mobile, first_name, last_name, education, employment_type, monthly_income):
        self.mobile          = mobile
        self.first_name      = first_name
        self.last_name       = last_name
        self.education       = education
        self.employment_type = employment_type
        self.monthly_income  = monthly_income

class OtpVerificationFields:
    def __init__(self, mobile, otp):
        self.mobile          = mobile
        self.otp             = otp

class LoanApplicationFields:
    def __init__(self, borrower, amount, period, approval, lender):
        self.borrower = borrower
        self.amount   = amount
        self.period   = period
        self.approval = approval
        self.lender   = lender