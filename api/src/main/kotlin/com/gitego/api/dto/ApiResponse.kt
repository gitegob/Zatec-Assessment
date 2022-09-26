package com.gitego.api.dto

data class ApiResponse<T>(var message: String?, var payload: T?)