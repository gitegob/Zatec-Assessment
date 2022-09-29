package com.delivery.ox.exceptions

data class EntityNotFoundException(override val message: String) : RuntimeException(message)

data class InvalidCredentialsException(override val message: String = "Invalid Credentials") :
    RuntimeException(message)

data class EntityAlreadyExistsException(override val message: String) : RuntimeException(message)

data class ValidationException(override val message: String) : RuntimeException(message)

data class TokenExpiredException(override val message: String) : RuntimeException(message)

data class OrderIsFullyPaidException(override val message: String = "The Order is fully paid") :
    RuntimeException(message)

data class OrderIsWrittenOffException(override val message: String = "The Order is written off") :
    RuntimeException(message)

data class OrderIsOverPaidException(
    var overFlowAmount: Double? = null,
    override val message: String = "The Order is overpaid ${if (overFlowAmount != null) "of $overFlowAmount" else ""}"
) :
    RuntimeException(message)

data class OrderIsHalfPaidAlreadyException(override val message: String = "The Order is half paid already") :
    RuntimeException(message)

data class OrderHasBeenAlreadyCancelled(override val message: String = "The Order has already been cancelled") :
    RuntimeException(message)

data class OrderIsPaidAlreadyException(override val message: String = "Order is paid already") :
    RuntimeException(message)

data class OrderIsCancelledException(override val message: String = "Order is cancelled") :
    RuntimeException(message)

data class OrderIsAlreadyStartedException(override val message: String = "Order is already started") :
    RuntimeException(message)

data class InvalidResetPasswordTokenException(override val message: String = "Invalid token") :
    RuntimeException(message)

data class ResetPasswordTokenExpiredException(override val message: String = "Token Expired") :
    RuntimeException(message)

data class OperationNotApplicableException(override val message: String = "Operation not applicable") :
    RuntimeException(message)

data class InvalidDeliveryCodeException(val code: String?) :
    RuntimeException("Invalid delivery code ${if (code != null) "::$code::" else ""}")

data class AlreadySupportOrderException(override val message: String = "Can't add support order to a support order") :
    RuntimeException(message)

data class ExceedingParentOrderWeightException(override val message: String = "Exceeding parent order weight not allowed") :
    RuntimeException(message)

data class ExceedingParentOrderAmountException(override val message: String = "Exceeding parent order amount not allowed") :
    RuntimeException(message)

data class WaitTimeFeeAlreadyChargedException(
    var waitTimeFee: Double? = null,
    override val message: String = "This order has already been charged a wait time fee of $waitTimeFee"
) :
    RuntimeException(message)

data class InvalidRequestException(override val message: String) : RuntimeException(message)
data class OperationFailedException(override val message: String = "Operation failed") :
    RuntimeException(message)

data class BadRequestException(override val message: String = "Bad request") :
    RuntimeException(message)