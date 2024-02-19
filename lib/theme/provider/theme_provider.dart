import '../../core/app_export.dart';class ThemeProvider extends ChangeNotifier {themeChange(String themeType) async  { PrefUtils().setThemeData(themeType); notifyListeners(); } 
 }
