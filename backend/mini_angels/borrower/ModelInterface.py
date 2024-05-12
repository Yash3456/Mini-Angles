import abc
from .models import *
from rest_framework import serializers

class IModelInterface(abc.ABC):
    """Interface for database model operations."""

    @abc.abstractmethod
    def insert(self, object):
        """Inserts data into the database."""
        pass

    @abc.abstractmethod
    def query(self, query_obj):
        """Queries data from the database"""
        pass

    @abc.abstractmethod
    def update(self, update_params, query_obj):
        """Updates data in the database"""
        pass

class QueryObject:
    """Class to encapsulate parameters for querying data."""
    def __init__(self, filters=None, order_by=None, select_fields=[]):
        """Initializes a QueryObject with the provided parameters."""
        self.filters = filters or {}  # Dictionary of filters {field_name: value}
        self.order_by = order_by or []  # List of fields to order by
        self.select_fields = select_fields or []  # List of fields to select

class ModelInterface(IModelInterface):
    """Implementation of the Model Interface."""

    def insert(self, object):
        """Inserts data into the database."""
        pass

    def _save(self, model_object):
        """Saves the model object into the database."""
        try:
            model_object.save()
        except Exception as err:
            name = model_object._meta.model_name
            raise Exception("Failed to insert data into model '{}' - {}".format(name, err))

    def _query(cls, object, serializer_object, query_params):
        """Queries the model obeject to retrieve required data"""
        queryset = object.objects.all()

        queryset = queryset.filter(**query_params.filters)
        queryset = queryset.order_by(*query_params.order_by)
        if query_params.select_fields:
            queryset = queryset.values(*query_params.select_fields)
            return serializer_object(queryset, fields=query_params.select_fields, many=True).data

        return serializer_object(queryset, many=True).data

    def _update(cls, object, update_params, query_params):
        """Updates the model object with the required data"""
        queryset = object.objects.all()

        if query_params.filters:
            queryset = queryset.filter(**query_params.filters)

        if update_params:
            queryset.update(**update_params)

        return queryset.count()

    def _delete(cls, object, delete_params):
        """Updates the model object with the required data"""
        object.objects.filter(**delete_params).delete()

class BorrowerProfileModel(ModelInterface):
    class BorrowerProfileSerializer(serializers.ModelSerializer):
        def __init__(self, *args, fields=None, **kwargs):
            super().__init__(*args, **kwargs)
            if fields is None:
                fields = [field.name for field in self.Meta.model._meta.fields]
            self.Meta.fields = fields

        class Meta:
            model = BorrowerProfile
            fields = []

    def insert(self, object):
        borrower_profile = BorrowerProfile(
            mobile=object.mobile,
            first_name=object.first_name,
            last_name=object.last_name,
            education=object.education,
            employment_type=object.employment_type,
            monthly_income=object.monthly_income)
        self._save(borrower_profile)

    def query(self, query_obj = QueryObject()):
        return self._query(BorrowerProfile, BorrowerProfile.BorrowerProfileSerializer, query_obj)

    def update(self, update_params, query_obj):
        return self._update(BorrowerProfile, update_params, query_obj)

    def delete(self, delete_params):
        return self._delete(BorrowerProfile, delete_params)

class OtpVerificationModel(ModelInterface):
    class OtpVerificationSerializer(serializers.ModelSerializer):
        def __init__(self, *args, fields=None, **kwargs):
            super().__init__(*args, **kwargs)
            if fields is None:
                fields = [field.name for field in self.Meta.model._meta.fields]
            self.Meta.fields = fields

        class Meta:
            model = OtpVerification
            fields = []

    def insert(self, object):
        otp_verification = OtpVerification(
            mobile=object.mobile,
            otp=object.otp)
        self._save(otp_verification)

    def query(self, query_obj = QueryObject()):
        return self._query(OtpVerification, OtpVerification.OtpVerificationSerializer, query_obj)

    def update(self, update_params, query_obj):
        return self._update(OtpVerification, update_params, query_obj)

    def delete(self, delete_params):
        return self._delete(OtpVerification, delete_params)

class LoanApplicationModel(ModelInterface):
    class LoanApplicationSerializer(serializers.ModelSerializer):
        def __init__(self, *args, fields=None, **kwargs):
            super().__init__(*args, **kwargs)
            if fields is None:
                fields = [field.name for field in self.Meta.model._meta.fields]
            self.Meta.fields = fields

        class Meta:
            model = LoanApplication
            fields = []

    def insert(self, object):
        loan_application = LoanApplication(
            mobile=object.mobile,
            first_name=object.first_name,
            last_name=object.last_name,
            education=object.education,
            employment_type=object.employment_type,
            monthly_income=object.monthly_income)
        self._save(loan_application)

    def query(self, query_obj = QueryObject()):
        return self._query(LoanApplication, LoanApplication.LoanApplicationSerializer, query_obj)

    def update(self, update_params, query_obj):
        return self._update(LoanApplication, update_params, query_obj)

    def delete(self, delete_params):
        return self._delete(LoanApplication, delete_params)