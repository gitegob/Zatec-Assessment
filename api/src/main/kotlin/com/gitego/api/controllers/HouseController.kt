package com.gitego.api.controllers

import com.gitego.api.config.Constants
import com.gitego.api.dto.ApiResponse
import com.gitego.api.dto.HouseDto
import com.gitego.api.services.HouseService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/v1/houses")
class HouseController(private val constants: Constants, private val houseService: HouseService) {
    @GetMapping
    fun getAllHouses(
        @RequestParam(
            required = false,
            name = "name"
        ) name: String?
    ): ResponseEntity<ApiResponse<List<HouseDto>>> {
        val houses = houseService.getHouses(name)
        return ResponseEntity.ok(ApiResponse("Houses retrieved", houses))
    }

    @GetMapping("{id}")
    fun getOneHouse(@PathVariable id: Long): ResponseEntity<ApiResponse<HouseDto>> {
        val houses = houseService.getOneHouse(id)
        return ResponseEntity.ok(ApiResponse("House retrieved", houses))
    }
}