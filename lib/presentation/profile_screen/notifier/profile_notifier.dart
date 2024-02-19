import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/profile_model.dart';part 'profile_state.dart';final profileNotifier = StateNotifierProvider<ProfileNotifier, ProfileState>((ref) => ProfileNotifier(ProfileState(profileModelObj: ProfileModel())));
/// A notifier that manages the state of a Profile according to the event that is dispatched to it.
class ProfileNotifier extends StateNotifier<ProfileState> {ProfileNotifier(ProfileState state) : super(state);

 }
