import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/family_access_model.dart';import '../models/familyaccess_item_model.dart';part 'family_access_state.dart';final familyAccessNotifier = StateNotifierProvider<FamilyAccessNotifier, FamilyAccessState>((ref) => FamilyAccessNotifier(FamilyAccessState(familyAccessModelObj: FamilyAccessModel(familyaccessItemList: [FamilyaccessItemModel(alexander: "Alexander"), FamilyaccessItemModel(alexander: "Demond"), FamilyaccessItemModel(alexander: "Alice"), FamilyaccessItemModel(alexander: "Freya")]))));
/// A notifier that manages the state of a FamilyAccess according to the event that is dispatched to it.
class FamilyAccessNotifier extends StateNotifier<FamilyAccessState> {FamilyAccessNotifier(FamilyAccessState state) : super(state);

 }
