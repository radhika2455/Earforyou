
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Dashboard(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            backgroundColor: '#ffffff',
            marginBottom:10
          }}
        >
          <Text
            style={style_sheet.wallet}
          >
            Your Wallet
          </Text>
          <View
            style={style_sheet.image_container}
          >
            <ImageBackground
              style={style_sheet.image1}
              source={require('./assets/images/6661dbaa-7f3a-4347-a8d2-b81152f94f07.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={style_sheet.image2}
              source={require('./assets/images/4cea138f-0dff-4906-aa02-9e862d4687aa.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={style_sheet.image3}
              source={require('./assets/images/9d320d41-1d5e-4fb2-90e9-b5880ebe37c6.png')}
              resizeMode='cover'
            />
            <View
              style={style_sheet.image4}
                     
            >
              <View
                style={style_sheet.image5}
               
              >
                <ImageBackground
                  style={style_sheet.image6}
                  
                  source={require('./assets/images/96fc9cec-5936-44d0-9143-cd8bb843e48e.png')}
                />
              </View>
              <ImageBackground
                style={style_sheet.image7}
                source={require('./assets/images/ab3f4d25-1159-481c-bd59-7d4097609842.png')}
              />
            </View>
            <ImageBackground
              style={style_sheet.image8}
              source={require('./assets/images/e6480289-f0ef-4a8b-84db-604de8095294.png')}
              resizeMode='cover'
            />
            <View
              style={style_sheet.image9}
              
            >
              <ImageBackground
                style={style_sheet.image10}
                source={require('./assets/images/13dff9ab-7217-40fe-9905-1d42669615a5.png')}
              />
            </View>
          </View>
          <Text
            style={style_sheet.image11}
             
            numberOfLines={1}
          >
            5 minute Free Talk
          </Text>
          <Text
            style={style_sheet.image12}
            numberOfLines={1}
          >
            on your first call
          </Text>
          <View
            style={style_sheet.image13}
          >
            <ImageBackground
              style={style_sheet.image15}
              source={require('./assets/images/5356dd2e-f36f-4cae-b85e-632cdec1306d.png')}
              resizeMode='cover'
            />
            <Text
              style={{
                width: 204,
                height: 66,
                fontFamily: 'Sarabun',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 26.022,
                position: 'absolute',
                top: 15,
                left: 13,
                textAlign: 'left',
                zIndex: 125,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 20,
                  fontWeight: '900',
                  lineHeight: 26.022,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                }}
              >
                Need to be heard? {'\n'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 16,
                  fontWeight: '16',
                  lineHeight: 20.022,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                }}
              >
                We’re here to listen and bring peace.
              </Text>
            </Text>
            <ImageBackground
              style={{
                width: 27,
                height: 27,
                position: 'absolute',
                top: 58,
                left: 60,
                zIndex: 126,
              }}
              source={require('./assets/images/9cfc953c407457fa8bcc52248e238f0727010818.png')}
              resizeMode='cover'
            />
            <Text
              style={{
                display: 'flex',
                height: 17,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 14.063,
                color: '#000000',
                position: 'absolute',
                top: 87,
                left: 16,
                textAlign: 'left',
                zIndex: 158,
              }}
              numberOfLines={1}
            >
              @INR10/ 3min
            </Text>
            <ImageBackground
              style={{
                width: 64,
                height: 24,
                borderTopLeftRadius: 58,
                borderTopRightRadius: 58,
                borderBottomRightRadius: 58,
                borderBottomLeftRadius: 58,
                position: 'absolute',
                top: 112,
                left: '50%',
                zIndex: 131,
                transform: [{ translateY: 0 }, { translateX: -105 }],
              }}
              source={require('./assets/images/97aca547-74e2-4ca9-a87d-610d02aab185.png')}
              resizeMode='cover'
            >
              <Text
                style={{
                  display: 'flex',
                  height: 14,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 14,
                  color: '#ffffff',
                  position: 'absolute',
                  top: 5,
                  left: 30,
                  textAlign: 'left',
                  zIndex: 132,
                }}
                numberOfLines={1}
              >
                Call
              </Text>
              <ImageBackground
                style={{
                  width: 12,
                  height: '50%',
                  position: 'absolute',
                  top: '25%',
                  right: 38,
                  zIndex: 133,
                }}
                source={require('./assets/images/e8120b19-e59a-436d-bc54-d89d4af1655b.png')}
                resizeMode='cover'
              />
            </ImageBackground>
            <Text
              style={{
                display: 'flex',
                height: 16,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14.063,
                color: '#000000',
                position: 'absolute',
                top: 116,
                left: 13,
                textAlign: 'left',
                zIndex: 127,
              }}
              numberOfLines={1}
            >
              Talk now !
            </Text>
          </View>
          <View
            style={{
              width: 208,
              height: 24,
              position: 'relative',
              zIndex: 175,
              marginTop: 53,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            }}
          >
            <ImageBackground
              style={{
                width: 24,
                height: 24,
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
                zIndex: 175,
              }}
              source={require('./assets/images/fb021ff6-12f8-420b-a70b-6813daeb4234.png')}
              resizeMode='cover'
            />
            <Text
              style={{
                display: 'flex',
                height: 25,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 19,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 0,
                left: 30,
                textAlign: 'left',
                zIndex: 174,
              }}
              numberOfLines={1}
            >
              Special ears for you
            </Text>
          </View>
          <View
            style={{
              width: 373,
              height: 67,
              position: 'relative',
              zIndex: 171,
              marginTop: 34,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 24,
            }}
          >
            <ImageBackground
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 163,
              }}
              source={require('./assets/images/27e801f8-5411-4b14-b96a-3d1c3f3a11ad.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 65,
                height: 65,
                position: 'absolute',
                top: 0,
                left: 2,
                zIndex: 171,
              }}
              source={require('./assets/images/4459551e-06a5-4e39-96f9-116a82475adb.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 65,
                height: 65,
                position: 'absolute',
                top: 0,
                left: 110,
                zIndex: 169,
              }}
              source={require('./assets/images/aabce6cf-5bb4-4101-adcc-f45ff0aa00a4.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 65,
                height: 65,
                position: 'absolute',
                top: 0,
                left: 208,
                zIndex: 167,
              }}
              source={require('./assets/images/bbf9bbb9-3f6a-4963-8378-521009fcd657.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 65,
                height: 65,
                position: 'absolute',
                top: 2,
                left: 308,
                zIndex: 165,
              }}
              source={require('./assets/images/65877d81-0062-4ade-b1aa-08f3f867dacf.png')}
              resizeMode='cover'
            />
          </View>
          <View
            style={{
              width: 369,
              height: 13,
              position: 'relative',
              zIndex: 172,
              marginTop: 15,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 36,
            }}
          >
            <Text
              style={{
                display: 'flex',
                height: 13,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 13,
                color: '#000000',
                position: 'absolute',
                top: 0,
                left: 0,
                textAlign: 'left',
                zIndex: 172,
              }}
              numberOfLines={1}
            >
              Doctor
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 14,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 14,
                color: '#000000',
                position: 'absolute',
                top: 0,
                left: 86,
                textAlign: 'left',
                zIndex: 170,
              }}
              numberOfLines={1}
            >
              Psychologist
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 14,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 14,
                color: '#000000',
                position: 'absolute',
                top: 0,
                left: 213,
                textAlign: 'left',
                zIndex: 168,
              }}
              numberOfLines={1}
            >
              Tutor
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 14,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 13,
                color: '#000000',
                position: 'absolute',
                top: 0,
                left: 299,
                textAlign: 'left',
                zIndex: 166,
              }}
              numberOfLines={1}
            >
              Therapist
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              width: 375,
              height: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 177,
              marginTop: 32,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 104,
                height: 20,
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexShrink: 0,
                fontFamily: 'Roboto',
                fontSize: 13,
                fontWeight: '400',
                lineHeight: 15.234,
                color: '#000000',
                position: 'relative',
                textAlign: 'center',
                zIndex: 136,
              }}
              numberOfLines={1}
            >
              Most Recent Talk
            </Text>
            <Text
              style={{
                height: 16,
                flexShrink: 0,
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14.063,
                color: '#8f8f8f',
                position: 'relative',
                textAlign: 'left',
                zIndex: 177,
              }}
              numberOfLines={1}
            >
              View all
            </Text>
          </View>
          <View
            style={{
              width: 399,
              height: 187,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
              marginTop: 18,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                width: 359,
                height: 1300,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
              }}
            >
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 3,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 4,
                  }}
                  source={require('./assets/images/4b0f99da-3f45-4828-b1ea-9a788b7e6f18.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 13,
                    left: 86,
                    zIndex: 5,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Roboto',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 18.75,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 6,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Asdf123&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Roboto',
                      fontSize: 10,
                      fontWeight: '400',
                      lineHeight: 11.719,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 8,
                    }}
                    numberOfLines={1}
                  >
                    10 Sep 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 2,
                      zIndex: 7,
                    }}
                    source={require('./assets/images/8019df3c-6c6b-42fb-8723-fc58cc122e4e.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 15,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 16,
                  }}
                  source={require('./assets/images/b5df3e67-f855-483c-82cc-74ecb2c8c920.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 13,
                    left: 86,
                    zIndex: 17,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Roboto',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 18.75,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 18,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    123fghj
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Roboto',
                      fontSize: 10,
                      fontWeight: '400',
                      lineHeight: 11.719,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 20,
                    }}
                    numberOfLines={1}
                  >
                    21 Oct 1:00 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 11.567,
                      height: 10.497,
                      position: 'absolute',
                      top: 41,
                      left: 3.216,
                      zIndex: 19,
                    }}
                    source={require('./assets/images/e23d0a74-863c-499b-8f74-31f9f7bcc459.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 27,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 28,
                  }}
                  source={require('./assets/images/e0199b03-36ba-4086-b94d-8ecb05b8078e.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 12,
                    left: 86,
                    zIndex: 29,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Roboto',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 18.75,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 30,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Jkl567&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Roboto',
                      fontSize: 10,
                      fontWeight: '400',
                      lineHeight: 11.719,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 32,
                    }}
                    numberOfLines={1}
                  >
                    16 Oct 6:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 11.567,
                      height: 10.497,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 31,
                    }}
                    source={require('./assets/images/f0a22779-197d-47b1-89ae-aeb6bc512529.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 56,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 57,
                  }}
                  source={require('./assets/images/77a36303-3ed5-417d-8291-eac85922856b.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 12,
                    left: 86,
                    zIndex: 58,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montaga',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 19.712,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 59,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Bnw234&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montaga',
                      fontSize: 10,
                      fontWeight: '400',
                      lineHeight: 12.32,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 61,
                    }}
                    numberOfLines={1}
                  >
                    8 oct 2:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 2,
                      zIndex: 60,
                    }}
                    source={require('./assets/images/9c51dae6-a289-4e92-86ac-e62e175191f8.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 43,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <View
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 44,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 70,
                      height: 70,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 45,
                    }}
                    source={require('./assets/images/ff9c40a8-e6da-4ec0-a6f2-612f8cc6b21f.png')}
                    resizeMode='cover'
                  />
                </View>
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 12,
                    left: 86,
                    zIndex: 46,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montaga',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 19.712,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 47,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Yui987&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montaga',
                      fontSize: 10,
                      fontWeight: '400',
                      lineHeight: 12.32,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 49,
                    }}
                    numberOfLines={1}
                  >
                    5 Aug 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 11.567,
                      height: 10.497,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 48,
                    }}
                    source={require('./assets/images/cf6d28a0-096d-456e-a933-0c963579747a.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 68,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 69,
                  }}
                  source={require('./assets/images/2560a85d-f86e-4da8-811a-901cc12a2265.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 13,
                    left: 86,
                    zIndex: 70,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montaga',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 19.712,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 71,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Bnc34&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 73,
                    }}
                    numberOfLines={1}
                  >
                    1 Aug 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 72,
                    }}
                    source={require('./assets/images/f74cb733-e0f0-443b-a49c-6c1172ae0a2a.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 227,
                  height: 70,
                  position: 'relative',
                  zIndex: 80,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 81,
                  }}
                  source={require('./assets/images/2a13ded5-bd5a-4889-80a7-9a0a3dfebebb.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    position: 'absolute',
                    top: 13,
                    left: 86,
                    zIndex: 82,
                  }}
                >
                  <Text
                    style={{
                      width: 74,
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 83,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Montaga',
                        fontSize: 16,
                        fontWeight: '400',
                        lineHeight: 19.504,
                        color: '#000000',
                        position: 'relative',
                        textAlign: 'left',
                      }}
                    >
                      Bnc34
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: 16,
                        fontWeight: '700',
                        lineHeight: 19.504,
                        color: '#000000',
                        position: 'relative',
                        textAlign: 'left',
                      }}
                    >
                      &nbsp;
                    </Text>
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 85,
                    }}
                    numberOfLines={1}
                  >
                    1 Aug 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 84,
                    }}
                    source={require('./assets/images/63e6f4f7-c333-40b7-aa71-bb66e9d56120.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 229,
                  height: 70,
                  position: 'relative',
                  zIndex: 9,
                  marginTop: 32,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 10,
                  }}
                  source={require('./assets/images/a4f565d7-6652-48c7-8167-818a11398724.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 9,
                    left: 88,
                    zIndex: 11,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 12,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Asdf123&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 14,
                    }}
                    numberOfLines={1}
                  >
                    10 Sep 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 2,
                      zIndex: 13,
                    }}
                    source={require('./assets/images/47180d09-cf7e-4abb-b896-c2a64bc3f2cb.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 232,
                  height: 70,
                  position: 'relative',
                  zIndex: 21,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 22,
                  }}
                  source={require('./assets/images/2f2598e8-6ebe-4f05-8b6c-00090eea537a.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 9,
                    left: 91,
                    zIndex: 23,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 24,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    123fghj
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 26,
                    }}
                    numberOfLines={1}
                  >
                    21 Oct 1:00 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 11.567,
                      height: 10.497,
                      position: 'absolute',
                      top: 41,
                      left: 3.216,
                      zIndex: 25,
                    }}
                    source={require('./assets/images/f811fc52-abb0-4b39-a8ce-95fcaa23d81f.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 355,
                  height: 70,
                  position: 'relative',
                  zIndex: 33,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <View
                  style={{
                    width: 355,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 34,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 70,
                      height: 70,
                      position: 'relative',
                      zIndex: 35,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./assets/images/f27ef027-f974-48de-8904-bdc2b2bdd85a.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 355,
                      height: 70,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 36,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 70,
                        height: 70,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 37,
                      }}
                      source={require('./assets/images/a4e01fde-70ba-4e17-8454-88ff003839c1.png')}
                      resizeMode='cover'
                    />
                    <View
                      style={{
                        width: 141,
                        height: 53,
                        fontSize: 0,
                        position: 'absolute',
                        top: 8,
                        left: 91,
                        zIndex: 39,
                      }}
                    >
                      <Text
                        style={{
                          height: 23,
                          fontFamily: 'Montserrat',
                          fontSize: 16,
                          fontWeight: '700',
                          lineHeight: 19.504,
                          color: '#000000',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 40,
                          marginTop: 0,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                        numberOfLines={1}
                      >
                        Jkl567&nbsp;
                      </Text>
                      <Text
                        style={{
                          display: 'flex',
                          height: 14,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          fontFamily: 'Montserrat',
                          fontSize: 10,
                          fontWeight: '500',
                          lineHeight: 12.19,
                          color: '#000000',
                          position: 'absolute',
                          top: 39,
                          left: 24,
                          textAlign: 'left',
                          zIndex: 42,
                        }}
                        numberOfLines={1}
                      >
                        16 Oct 6:32 PM
                      </Text>
                      <ImageBackground
                        style={{
                          width: 11.567,
                          height: 10.497,
                          position: 'absolute',
                          top: 41,
                          left: 3,
                          zIndex: 41,
                        }}
                        source={require('./assets/images/1e9ff9dc-31c6-48ff-9667-f74a48add297.png')}
                        resizeMode='cover'
                      />
                    </View>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        position: 'absolute',
                        top: 25,
                        left: 330,
                        overflow: 'hidden',
                        zIndex: 38,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 232,
                  height: 70,
                  position: 'relative',
                  zIndex: 62,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 63,
                  }}
                  source={require('./assets/images/8b664ebc-2e97-4a16-9317-813a8d900d57.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 8,
                    left: 91,
                    zIndex: 64,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 65,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Bnw234&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 67,
                    }}
                    numberOfLines={1}
                  >
                    8 oct 2:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 2,
                      zIndex: 66,
                    }}
                    source={require('./assets/images/87c06b10-074f-4087-b93f-669bea544936.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 232,
                  height: 70,
                  position: 'relative',
                  zIndex: 50,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 51,
                  }}
                  source={require('./assets/images/c6b9dd71-4e4e-4c07-8161-115b1b36bc3e.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 8,
                    left: 91,
                    zIndex: 52,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 53,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Yui987&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 55,
                    }}
                    numberOfLines={1}
                  >
                    5 Aug 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 11.567,
                      height: 10.497,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 54,
                    }}
                    source={require('./assets/images/360cfddc-9e1e-4436-a821-4747f1147548.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 232,
                  height: 70,
                  position: 'relative',
                  zIndex: 74,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 75,
                  }}
                  source={require('./assets/images/70aca53e-ecbe-4dd2-848d-87a6fc9b1191.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 9,
                    left: 91,
                    zIndex: 76,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 77,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Bnc34&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 79,
                    }}
                    numberOfLines={1}
                  >
                    1 Aug 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 78,
                    }}
                    source={require('./assets/images/fc03e932-c690-4b90-933f-51e71f7a64ee.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
              <View
                style={{
                  width: 232,
                  height: 70,
                  position: 'relative',
                  zIndex: 86,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
              >
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 87,
                  }}
                  source={require('./assets/images/cfefbbea-cdd6-4a7b-ad87-3a129d702fc5.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: 141,
                    height: 53,
                    fontSize: 0,
                    position: 'absolute',
                    top: 9,
                    left: 91,
                    zIndex: 88,
                  }}
                >
                  <Text
                    style={{
                      height: 23,
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      fontWeight: '700',
                      lineHeight: 19.504,
                      color: '#000000',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 89,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    numberOfLines={1}
                  >
                    Bnc34&nbsp;
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Montserrat',
                      fontSize: 10,
                      fontWeight: '500',
                      lineHeight: 12.19,
                      color: '#000000',
                      position: 'absolute',
                      top: 39,
                      left: 24,
                      textAlign: 'left',
                      zIndex: 91,
                    }}
                    numberOfLines={1}
                  >
                    1 Aug 12:32 PM
                  </Text>
                  <ImageBackground
                    style={{
                      width: 12,
                      height: 10,
                      position: 'absolute',
                      top: 41,
                      left: 3,
                      zIndex: 90,
                    }}
                    source={require('./assets/images/10b05420-59f2-42a4-ab94-6a32265e4bfc.png')}
                    resizeMode='cover'
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 25,
                left: 267,
                overflow: 'hidden',
                zIndex: 92,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 93,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/54421ec1-1eea-4382-a610-ababaebf4205.png')}
              />
            </View>
            <ImageBackground
              style={{
                width: 16,
                height: '8.56%',
                position: 'absolute',
                top: '16.04%',
                right: 39,
                zIndex: 134,
              }}
              source={require('./assets/images/bf1be9c5-bd1e-44a7-92cf-531dd10d1d2e.png')}
              resizeMode='cover'
            />
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 123,
                left: 267,
                overflow: 'hidden',
                zIndex: 94,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 95,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/1c57bbbe-719b-46ec-93f9-af7b533ccb66.png')}
              />
            </View>
            <ImageBackground
              style={{
                width: 16,
                height: '8.56%',
                position: 'absolute',
                top: '68.45%',
                right: 39,
                zIndex: 135,
              }}
              source={require('./assets/images/f5bc2873-73d9-488f-b7c6-992ec3d51a11.png')}
              resizeMode='cover'
            />
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 219,
                left: 267,
                overflow: 'hidden',
                zIndex: 96,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 97,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/2a092705-fa9b-4a24-a4a6-0d768a8b4185.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 309,
                left: 267,
                overflow: 'hidden',
                zIndex: 98,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 99,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/f3292adc-a23d-4d3b-aa9e-877675a32fea.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 407,
                left: 267,
                overflow: 'hidden',
                zIndex: 100,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 101,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/404d056a-81b7-417a-b66d-be551abee362.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 500,
                left: 267,
                overflow: 'hidden',
                zIndex: 102,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 103,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/e60a0806-4744-4f0c-b439-07d8c3eeff65.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 593,
                left: 267,
                overflow: 'hidden',
                zIndex: 104,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 105,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/a373aade-797f-4142-ad9b-fc90469a2d3a.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 688,
                left: 266,
                overflow: 'hidden',
                zIndex: 106,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 107,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/ccc9307b-28ab-4042-b0e5-dfd4cbcc2378.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 783,
                left: 267,
                overflow: 'hidden',
                zIndex: 108,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 109,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/4e7f0eac-6d20-4d89-be07-35d8404fda2b.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 878,
                left: 267,
                overflow: 'hidden',
                zIndex: 110,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 111,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/da951d51-dc47-4e77-b601-4c1da68d2fc0.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 973,
                left: 267,
                overflow: 'hidden',
                zIndex: 112,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 113,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/ca4a0cbf-94fd-4126-ad26-f75fa8cc01d6.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 1068,
                left: 267,
                overflow: 'hidden',
                zIndex: 114,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 115,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/f75b380d-3703-4801-9a0e-e72d9c2476b6.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 1157,
                left: 267,
                overflow: 'hidden',
                zIndex: 116,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 117,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/866aced3-d367-42a2-86a7-54c41547439b.png')}
              />
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                top: 1249,
                left: 266,
                overflow: 'hidden',
                zIndex: 118,
              }}
            >
              <ImageBackground
                style={{
                  width: 21.667,
                  height: 21.667,
                  position: 'relative',
                  zIndex: 119,
                  marginTop: 2.167,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2.167,
                }}
                source={require('./assets/images/1e8e5b96-5030-4c92-b9e7-32271ad81477.png')}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              width: 326,
              height: 43,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 146,
              marginTop: 28,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 51,
            }}
          >
            <ImageBackground
              style={{
                width: 155,
                height: 43,
                flexShrink: 0,
                borderTopLeftRadius: 58,
                borderTopRightRadius: 58,
                borderBottomRightRadius: 58,
                borderBottomLeftRadius: 58,
                position: 'relative',
                zIndex: 144,
              }}
              source={require('./assets/images/08ca8c9d-5abf-4bf9-a81c-a78f3dd9b384.png')}
              resizeMode='cover'
            >
              <ImageBackground
                style={{
                  width: 18.697,
                  height: 17.39,
                  position: 'absolute',
                  top: 12,
                  left: 20,
                  overflow: 'hidden',
                  zIndex: 148,
                }}
                source={require('./assets/images/6df441ea-4c86-4b9b-859c-7f746def4cbc.png')}
                resizeMode='cover'
              />
              <Text
                style={{
                  display: 'flex',
                  width: 109,
                  height: 15,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: '#ffffff',
                  position: 'absolute',
                  top: 13,
                  left: 36,
                  textAlign: 'center',
                  zIndex: 147,
                }}
                numberOfLines={1}
              >
                Express Openly
              </Text>
            </ImageBackground>
            <ImageBackground
              style={{
                width: 155,
                height: 43,
                flexShrink: 0,
                borderTopLeftRadius: 58,
                borderTopRightRadius: 58,
                borderBottomRightRadius: 58,
                borderBottomLeftRadius: 58,
                position: 'relative',
                zIndex: 146,
              }}
              source={require('./assets/images/fb0ecab0-4ac2-4e94-a8b5-1968a0f30289.png')}
              resizeMode='cover'
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  position: 'absolute',
                  top: 9,
                  left: 26,
                  overflow: 'hidden',
                  zIndex: 150,
                }}
              >
                <ImageBackground
                  style={{
                    width: 24,
                    height: 17.25,
                    position: 'relative',
                    zIndex: 151,
                    marginTop: 3.375,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/92898402-9e14-426a-9795-b8c895be4db6.png')}
                />
              </View>
              <Text
                style={{
                  display: 'flex',
                  width: 83,
                  height: 21,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 16.406,
                  color: '#ffffff',
                  position: 'absolute',
                  top: 13,
                  left: 58,
                  textAlign: 'center',
                  zIndex: 149,
                }}
                numberOfLines={1}
              >
                Listen deeply
              </Text>
            </ImageBackground>
          </View>
          <Text
            style={{
              height: 12,
              fontFamily: 'Roboto',
              fontSize: 11,
              fontWeight: '700',
              lineHeight: 12,
              color: '#428587',
              position: 'relative',
              textAlign: 'left',
              zIndex: 159,
              marginTop: 26,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 110,
            }}
            numberOfLines={1}
          >
            Your Listener Awaits 5-Minute Free Call
          </Text>

          <ImageBackground
            style={{
              width: 428,
              height: 378,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
              position: 'absolute',
              top: -23,
              left: 0,
            }}
            source={require('./assets/images/28cf751c-ab35-4e5e-a509-5223b66c8dfa.png')}
            resizeMode='cover'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style_sheet = StyleSheet.create({
  wallet: {
    display: 'flex',
    width: 42,
    height: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Roboto',
    fontSize: 8,
    fontWeight: '500',
    lineHeight: 9.375,
    color: '#000000',
    position: 'relative',
    textAlign: 'left',
    zIndex: 157,
    marginTop: 44,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 359,
  },
  image_container:{
    width: 374,
    height: 61,
    position: 'relative',
    zIndex: 176,
    marginTop: -8,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 21,
  },
  image1:{
    width: 56,
    height: 56,
    position: 'absolute',
    top: 0,
    left: 3,
    zIndex: 121,
  },
  image2:{
    width: 32,
    height: 32,
    position: 'absolute',
    top: 14,
    left: 297,
    zIndex: 176,
  },
  image3:{width: 32,
    height: 32,
    position: 'absolute',
    top: 14,
    left: 342,
    zIndex: 152,
  },
  image4:{width: 20,
    height: 20,
    position: 'absolute',
    top: 20,
    left: 348,
    overflow: 'hidden',
    zIndex: 153, 
  },

  image5 :{   width: 15.956,
    height: 14.583,
    position: 'absolute',
    top: 2.5,
    left: 1.667,
    zIndex: 155,
  },
  image6:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 156,
  },
  image7:{
    width: '34.14%',
    height: '31.25%',
    position: 'absolute',
    top: '33.33%',
    left: '60.65%',
    zIndex: 154

  },
  image8:{ width: 22,
    height: 22,
    position: 'absolute',
    top: 39,
    left: 0,
    zIndex: 138,

  },
  image9:{
    width: 22,
    height: 22,
    position: 'absolute',
    top: 39,
    left: 0,
    overflow: 'hidden',
    zIndex: 140,

  },
image10:{
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 141,
},
image11:{
  height: 29,
  fontFamily: 'Roboto',
  fontSize: 26,
  fontWeight: '900',
  lineHeight: 29,
  color: '#722415',
  position: 'relative',
  textAlign: 'left',
  zIndex: 160,
  marginTop: -9,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 106,

},
image12:{
  display: 'flex',
              width: 147,
              height: 24,
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontFamily: 'Roboto',
              fontSize: 20,
              fontWeight: '400',
              lineHeight: 23.438,
              color: '#722415',
              position: 'relative',
              textAlign: 'center',
              zIndex: 161,
              marginTop: 8,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 140,
},
image13:{ width: 376,
  height: 148,
  backgroundColor: '#fcf0e1',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  borderBottomRightRadius: 12,
  borderBottomLeftRadius: 12,
  borderWidth: 1,
  borderColor: '#c37a4d',
  borderStyle: 'solid',
  position: 'relative',
  zIndex: 123,
  marginTop: 24,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 20,

},
image14:{
  width: 212,
  height: 144,
  position: 'absolute',
  top: 2,
  left: 159,
  zIndex: 124,
},
image15:{
  width: 212,
                height: 144,
                position: 'absolute',
                top: 2,
                left: 159,
                zIndex: 124,
},
image16:{

},
image17:{

},
image18:{

},
image19:{

},
image20:{

},
})
