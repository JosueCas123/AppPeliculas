import React from 'react'
import { Text, View,FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter'; // FORMATO PARA NUMEROS 
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/credistInterfaces';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props{
    moviefull:MovieFull,
    cast:Cast[]
}

export const MovieDetails = ({moviefull, cast}:Props) => {
  return (
    <>
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:'row'  }} >
                <Icon
                        name="star-outline"
                        color="grey"
                        size={15}
                />
                <Text style={{marginLeft:3, color:'black'}} >{moviefull.vote_average}</Text>

                <Text style={{marginLeft:6, color:'black' }} >
                    -{moviefull.genres.map(g => g.name).join(', ')}
                </Text>

            </View>
            {/* historia */}
            <Text style={{fontSize:20, color:'black', fontWeight:'bold'}} >
                Historia
            </Text>
            <Text style={{fontSize:16, color:'black'}} >
                {moviefull.overview}
            </Text>
            <Text style={{fontSize:20, color:'black', fontWeight:'bold', marginTop:10 }} >
                Presupuesto    
            </Text>    
            <Text style={{fontSize:18, color:'black'}} >
                {currencyFormatter.format(moviefull.budget, { code:'USD' })}
            </Text>
        </View>
            {/* CastItem */}
        <View  style={{marginTop:10, marginBottom:100}}>
            <Text style={{fontSize:20, color:'black', fontWeight:'bold', marginTop:10, marginHorizontal:20, }} >Actores</Text>
            
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString() }
                renderItem={({item}) => <CastItem actor={item} /> }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10, height:70}}
            />
            {/* <CastItem actor={cast[0]} /> */}

        </View>

    </>
  )
}
