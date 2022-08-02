import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RouteParams } from '../navegacion/StackNavegacion';
import { useMovieDatille } from '../hooks/useMovieDatille';
import { MovieDetails } from '../componests/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';
const {height:Screeheight} = Dimensions.get('screen')

interface Props extends StackScreenProps<RouteParams, 'DateliScreen'>{};

export const DateliScreen = ({route, navigation}:Props) => {

  const movie =  route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isloading, movieFull, cast } = useMovieDatille(movie.id);
 
   return (

    <ScrollView>
        <View style={styles.imageContainer}>
            <Image
                source={{uri}}
                style={styles.posterImage}
            />
        </View>
        <View style={styles.marginContainer}>
          <Text style={styles.subTitle} >{movie.original_title}</Text>
          <Text style={styles.title} >{movie.title}</Text>
        </View>
        {
          isloading 
            ? <ActivityIndicator size={35} color="grey" style={{marginTop:20}} />
            : <MovieDetails moviefull={movieFull!} cast={cast}/>

        }
        <View style={styles.backButon}>
            <TouchableOpacity
                onPress={() => navigation.pop() }
            >
                <Icon
                    color="white"
                    name="arrow-back-outline"
                    size={60}
                    
                />
                
            </TouchableOpacity>
        </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({

    imageContainer:{
      //backgroundColor:'red',
      overflow:'hidden',
      width:'100%',
      height: Screeheight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 5,
      borderBottomEndRadius:25,
      borderBottomStartRadius:25,
    },
    posterImage:{
      flex:1,
      
    },
    marginContainer:{
      marginHorizontal:20,
      marginTop:20
    },
    subTitle:{
      fontSize:16,
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
      color:'black'
    },
    backButon:{
        position:'absolute',
        zIndex:999,
        elevation:9,
        top:30,
        left:5
    }

});
