
import React, { useContext } from 'react';
import { ActivityIndicator, Dimensions, LogBox, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovie } from '../hooks/useMovie';
import { MoviePoster } from '../componests/MoviePoster';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../componests/HorizontalSlider';
import { Gradient } from '../componests/Gradient';
import { getImageColors } from '../helpers/getColors';
import { GredientContext } from '../contex/GredientContext';
import { useEffect } from 'react';

LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",]);

const {width:widthWid } = Dimensions.get('window');
export const HomeScreen = () => {

   const {nowPlaying, popular, topRated,upcoming, isLoanding} = useMovie();
   const {setMaincolor} = useContext(GredientContext)

   const getPosterColors = async(index:number) =>{
     const movie = nowPlaying[index]
     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
     const [primary = 'greeb', secundary='orange'] = await getImageColors(uri);
     setMaincolor({primary, secundary})

   } 

   useEffect(() => {
      if(nowPlaying.length > 0){
         getPosterColors(0);
      }
   }, [nowPlaying])
   
   if (isLoanding){
     return (
       <View style={{flex:1, justifyContent:'center', alignItems:'center',}} >
         <ActivityIndicator color="red" size={100} />
       </View>
     )
   }
   //console.log(peliculasEnCine[3]?.title)

      // useEffect(() => {
      //    movieDB.get<MovieDB>('/now_playing')
      //     .then(resp => {
      //       console.log(resp.data);
      //     });
      // }, []);
  return (

    <Gradient>
        <ScrollView>
              <View style={{marginTop:20}}>

                {/* carusel */}

                <View style={{height:440}}>

                    <Carousel
                      data={nowPlaying}
                      renderItem={({item}:any) =>  <MoviePoster movie={item}/> }
                      sliderWidth={widthWid}
                      itemWidth={300}
                      inactiveSlideOpacity={0.9}
                      onSnapToItem={ index => getPosterColors(index) }
                    
                    />

                </View>
                {/* peliculas populares */}

                    <HorizontalSlider title='Populares' movie={popular}  />
                    <HorizontalSlider title='Top Rated' movie={topRated}  />
                    <HorizontalSlider title='Upcoming' movie={upcoming}  />
              </View>
        </ScrollView>
   </Gradient>
  )
}

