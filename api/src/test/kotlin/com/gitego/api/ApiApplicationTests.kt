package com.gitego.api

import com.gitego.api.dto.ApiResponse
import org.junit.jupiter.api.MethodOrderer
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.TestMethodOrder
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.*
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestPropertySource

@SpringBootTest
class ApiApplicationTests {

    @Test
    fun contextLoads() {
    }

}


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(
    locations = ["classpath:application-test.properties"]
)
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation::class)
class BaseTest {
    @Autowired
    lateinit var testRestTemplate: TestRestTemplate
    val log = LoggerFactory.getLogger(BaseTest::class.java)

    fun sendRequest(
        endpoint: String,
        httpMethod: HttpMethod,
        dtoObject: Any?,
        token: String?
    ): ResponseEntity<ApiResponse<*>> {
        val httpEntity = buildRequest(dtoObject, token)
        return testRestTemplate.exchange(
            endpoint,
            httpMethod,
            httpEntity,
            ApiResponse::class.java
        )
    }

    fun buildRequest(dtoObject: Any?, token: String?): HttpEntity<*> {
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        if (token != null) {
            headers.setBearerAuth(token)
        }
        return HttpEntity(dtoObject, headers)
    }
}