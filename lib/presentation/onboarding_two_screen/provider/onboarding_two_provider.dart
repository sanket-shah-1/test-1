import '../../../core/app_export.dart';import '../models/onboarding_two_model.dart';/// A provider class for the OnboardingTwoScreen.
///
/// This provider manages the state of the OnboardingTwoScreen, including the
/// current onboardingTwoModelObj

// ignore_for_file: must_be_immutable
class OnboardingTwoProvider extends ChangeNotifier {OnboardingTwoModel onboardingTwoModelObj = OnboardingTwoModel();

@override void dispose() { super.dispose(); } 
 }
