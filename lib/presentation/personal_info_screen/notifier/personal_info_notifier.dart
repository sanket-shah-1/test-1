import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/personal_info_model.dart';part 'personal_info_state.dart';final personalInfoNotifier = StateNotifierProvider<PersonalInfoNotifier, PersonalInfoState>((ref) => PersonalInfoNotifier(PersonalInfoState(nameController: TextEditingController(), nameController1: TextEditingController(), homeinfoController: TextEditingController(), personalInfoModelObj: PersonalInfoModel())));
/// A notifier that manages the state of a PersonalInfo according to the event that is dispatched to it.
class PersonalInfoNotifier extends StateNotifier<PersonalInfoState> {PersonalInfoNotifier(PersonalInfoState state) : super(state);

 }
