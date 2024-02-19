import '../../core/app_export.dart';import 'models/selectanalysgrid_item_model.dart';import 'notifier/select_analys_notifier.dart';import 'widgets/selectanalysgrid_item_widget.dart';class SelectAnalysBottomsheet extends ConsumerStatefulWidget {const SelectAnalysBottomsheet({Key? key}) : super(key: key);

@override SelectAnalysBottomsheetState createState() =>  SelectAnalysBottomsheetState();
 }
class SelectAnalysBottomsheetState extends ConsumerState<SelectAnalysBottomsheet> {@override Widget build(BuildContext context) { return SingleChildScrollView(child: Container(padding: EdgeInsets.symmetric(horizontal: 31.h, vertical: 46.v), child: Column(children: [Opacity(opacity: 0.8, child: Text("lbl_select_analys".tr, style: theme.textTheme.titleMedium)), SizedBox(height: 37.v), _buildSelectAnalysGrid(context), SizedBox(height: 72.v)]))); } 
/// Section Widget
Widget _buildSelectAnalysGrid(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 1.h), child: Consumer(builder: (context, ref, _) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 171.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: ref.watch(selectAnalysNotifier).selectAnalysModelObj?.selectanalysgridItemList.length ?? 0, itemBuilder: (context, index) {SelectanalysgridItemModel model = ref.watch(selectAnalysNotifier).selectAnalysModelObj?.selectanalysgridItemList[index] ?? SelectanalysgridItemModel(); return SelectanalysgridItemWidget(model);});})); } 
 }
