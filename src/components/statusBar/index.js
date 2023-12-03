import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function StatusBarColor({cor, estilo}) {
    cor = cor ?? '#289E10'
    estilo = estilo ?? 'light'
    return (
        <StatusBar backgroundColor={cor} barStyle={estilo+'-content'} style={estilo} />
    )
}



