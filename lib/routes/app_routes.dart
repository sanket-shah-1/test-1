import '../core/app_export.dart';import '../presentation/airpods_screen/airpods_screen.dart';import '../presentation/app_navigation_screen/app_navigation_screen.dart';import '../presentation/entertainment_screen/entertainment_screen.dart';import '../presentation/ipad_screen/ipad_screen.dart';import '../presentation/iphone_screen/iphone_screen.dart';import '../presentation/mac_screen/mac_screen.dart';import '../presentation/store_screen/store_screen.dart';import '../presentation/tv_home_screen/tv_home_screen.dart';import '../presentation/watch_container_screen/watch_container_screen.dart';
// ignore_for_file: must_be_immutable
class AppRoutes {static const String storeScreen = '/store_screen';

static const String macScreen = '/mac_screen';

static const String ipadScreen = '/ipad_screen';

static const String iphoneScreen = '/iphone_screen';

static const String watchPage = '/watch_page';

static const String watchContainerScreen = '/watch_container_screen';

static const String airpodsScreen = '/airpods_screen';

static const String tvHomeScreen = '/tv_home_screen';

static const String entertainmentScreen = '/entertainment_screen';

static const String appNavigationScreen = '/app_navigation_screen';

static const String initialRoute = '/initialRoute';

static Map<String, WidgetBuilder> routes = {storeScreen : (context) => StoreScreen(), macScreen : (context) => MacScreen(), ipadScreen : (context) => IpadScreen(), iphoneScreen : (context) => IphoneScreen(), watchContainerScreen : (context) => WatchContainerScreen(), airpodsScreen : (context) => AirpodsScreen(), tvHomeScreen : (context) => TvHomeScreen(), entertainmentScreen : (context) => EntertainmentScreen(), appNavigationScreen : (context) => AppNavigationScreen(), initialRoute : (context) => StoreScreen()};

 }
