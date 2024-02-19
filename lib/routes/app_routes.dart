import '../core/app_export.dart';import '../presentation/analys_container_screen/analys_container_screen.dart';import '../presentation/app_navigation_screen/app_navigation_screen.dart';import '../presentation/choose_screen/choose_screen.dart';import '../presentation/connect_screen/connect_screen.dart';import '../presentation/connected_screen/connected_screen.dart';import '../presentation/connecting_screen/connecting_screen.dart';import '../presentation/family_access_screen/family_access_screen.dart';import '../presentation/flash_screen/flash_screen.dart';import '../presentation/history_screen/history_screen.dart';import '../presentation/home_screen/home_screen.dart';import '../presentation/iphone_11_pro_x_fortytwo_screen/iphone_11_pro_x_fortytwo_screen.dart';import '../presentation/kitchen_room_screen/kitchen_room_screen.dart';import '../presentation/light_screen/light_screen.dart';import '../presentation/living_room_screen/living_room_screen.dart';import '../presentation/login_one_screen/login_one_screen.dart';import '../presentation/login_page_screen/login_page_screen.dart';import '../presentation/login_screen/login_screen.dart';import '../presentation/login_with_screen/login_with_screen.dart';import '../presentation/music_screen/music_screen.dart';import '../presentation/onboarding_one_screen/onboarding_one_screen.dart';import '../presentation/onboarding_screen/onboarding_screen.dart';import '../presentation/onboarding_two_screen/onboarding_two_screen.dart';import '../presentation/personal_info_screen/personal_info_screen.dart';import '../presentation/playlist_music_screen/playlist_music_screen.dart';import '../presentation/profile_screen/profile_screen.dart';import '../presentation/roomsview_all_screen/roomsview_all_screen.dart';import '../presentation/signup_one_screen/signup_one_screen.dart';import '../presentation/signup_screen/signup_screen.dart';import '../presentation/temperatur_screen/temperatur_screen.dart';import '../presentation/tv_screen/tv_screen.dart';import '../presentation/window_tab_container_screen/window_tab_container_screen.dart';
// ignore_for_file: must_be_immutable
class AppRoutes {static const String flashScreen = '/flash_screen';

static const String onboardingScreen = '/onboarding_screen';

static const String onboardingOneScreen = '/onboarding_one_screen';

static const String onboardingTwoScreen = '/onboarding_two_screen';

static const String loginScreen = '/login_screen';

static const String loginWithScreen = '/login_with_screen';

static const String signupScreen = '/signup_screen';

static const String signupOneScreen = '/signup_one_screen';

static const String loginOneScreen = '/login_one_screen';

static const String chooseScreen = '/choose_screen';

static const String livingRoomScreen = '/living_room_screen';

static const String kitchenRoomScreen = '/kitchen_room_screen';

static const String homeScreen = '/home_screen';

static const String roomsviewAllScreen = '/roomsview_all_screen';

static const String temperaturScreen = '/temperatur_screen';

static const String tvScreen = '/tv_screen';

static const String lightScreen = '/light_screen';

static const String windowPage = '/window_page';

static const String windowTabContainerScreen = '/window_tab_container_screen';

static const String musicScreen = '/music_screen';

static const String playlistMusicScreen = '/playlist_music_screen';

static const String analysPage = '/analys_page';

static const String analysContainerScreen = '/analys_container_screen';

static const String connectScreen = '/connect_screen';

static const String connectingScreen = '/connecting_screen';

static const String connectedScreen = '/connected_screen';

static const String historyScreen = '/history_screen';

static const String profileScreen = '/profile_screen';

static const String familyAccessScreen = '/family_access_screen';

static const String personalInfoScreen = '/personal_info_screen';

static const String iphone11ProXFortytwoScreen = '/iphone_11_pro_x_fortytwo_screen';

static const String loginPageScreen = '/login_page_screen';

static const String appNavigationScreen = '/app_navigation_screen';

static const String initialRoute = '/initialRoute';

static Map<String, WidgetBuilder> routes = {flashScreen : (context) => FlashScreen(), onboardingScreen : (context) => OnboardingScreen(), onboardingOneScreen : (context) => OnboardingOneScreen(), onboardingTwoScreen : (context) => OnboardingTwoScreen(), loginScreen : (context) => LoginScreen(), loginWithScreen : (context) => LoginWithScreen(), signupScreen : (context) => SignupScreen(), signupOneScreen : (context) => SignupOneScreen(), loginOneScreen : (context) => LoginOneScreen(), chooseScreen : (context) => ChooseScreen(), livingRoomScreen : (context) => LivingRoomScreen(), kitchenRoomScreen : (context) => KitchenRoomScreen(), homeScreen : (context) => HomeScreen(), roomsviewAllScreen : (context) => RoomsviewAllScreen(), temperaturScreen : (context) => TemperaturScreen(), tvScreen : (context) => TvScreen(), lightScreen : (context) => LightScreen(), windowTabContainerScreen : (context) => WindowTabContainerScreen(), musicScreen : (context) => MusicScreen(), playlistMusicScreen : (context) => PlaylistMusicScreen(), analysContainerScreen : (context) => AnalysContainerScreen(), connectScreen : (context) => ConnectScreen(), connectingScreen : (context) => ConnectingScreen(), connectedScreen : (context) => ConnectedScreen(), historyScreen : (context) => HistoryScreen(), profileScreen : (context) => ProfileScreen(), familyAccessScreen : (context) => FamilyAccessScreen(), personalInfoScreen : (context) => PersonalInfoScreen(), iphone11ProXFortytwoScreen : (context) => Iphone11ProXFortytwoScreen(), loginPageScreen : (context) => LoginPageScreen(), appNavigationScreen : (context) => AppNavigationScreen(), initialRoute : (context) => FlashScreen()};

 }
