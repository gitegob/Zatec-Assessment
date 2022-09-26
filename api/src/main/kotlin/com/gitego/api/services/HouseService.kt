package com.gitego.api.services

import com.gitego.api.config.Constants
import com.gitego.api.dto.HouseDto
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.io.IOException

@Service
class HouseService(private val constants: Constants) {
    private val restTemplate = RestTemplate()

    private fun <T> sendRequest(
        url: String,
        httpMethod: HttpMethod,
        dtoObject: Any?,
        headers: HttpHeaders,
        classOfResponse: Class<T>
    ): ResponseEntity<T> {
        return restTemplate.exchange(
            url,
            httpMethod,
            HttpEntity(dtoObject, headers),
            classOfResponse
        )
    }

    fun getHouses(name: String?): List<HouseDto>? {
        val headers = HttpHeaders()
        return try {
            val res = sendRequest(
                "${constants.gotUrl}/houses${if (name != null) "?name=$name" else ""}",
                HttpMethod.GET,
                null,
                headers,
                Any::class.java
            )
            res.body as List<HouseDto>

        } catch (e: Exception) {
            throw IOException("Error: ${e.message}")
        }
    }

    fun getOneHouse(id: Long): HouseDto? {
        val headers = HttpHeaders()
        return try {
            val res = sendRequest(
                "${constants.gotUrl}/houses/$id",
                HttpMethod.GET,
                null,
                headers,
                HouseDto::class.java
            )
            res.body

        } catch (e: Exception) {
            throw IOException("Error: ${e.message}")
        }
    }
}