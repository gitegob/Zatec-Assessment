package com.gitego.api.dto

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class HouseDto(
    var url: String? = null,
    var name: String? = null,
    var region: String? = null,
    var coatOfArms: String? = null,
    var words: String? = null,
    var titles: List<String>? = listOf(),
    var seats: List<String>? = listOf(),
    var currentLord: String? = null,
    var heir: String? = null,
    var overlord: String? = null,
    var founded: String? = null,
    var founder: String? = null,
    var diedOut: String? = null,
    var ancestralWeapons: List<String>? = listOf(),
    var cadetBranches: List<String>? = listOf(),
    var swornMembers: List<String>? = listOf(),
)