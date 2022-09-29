package com.gitego.api.controllers

import com.gitego.api.BaseTest
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus

class HouseControllerTests: BaseTest() {
    private val endpoint = "/v1/houses"

    @Test
    fun `should get all houses`() {
        val res = sendRequest(endpoint, HttpMethod.GET, null, null)
        assertThat(res.statusCode).isEqualTo(HttpStatus.OK)
    }

    @Test
    fun `should get one house`() {
        val res = sendRequest("$endpoint/1", HttpMethod.GET, null, null)
        assertThat(res.statusCode).isEqualTo(HttpStatus.OK)
    }
}