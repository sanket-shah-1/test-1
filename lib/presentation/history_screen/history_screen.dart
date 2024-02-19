import '../../core/app_export.dart';import 'models/historylist_item_model.dart';import 'notifier/history_notifier.dart';import 'widgets/historylist_item_widget.dart';class HistoryScreen extends ConsumerStatefulWidget {const HistoryScreen({Key? key}) : super(key: key);

@override HistoryScreenState createState() =>  HistoryScreenState();
 }
class HistoryScreenState extends ConsumerState<HistoryScreen> {@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 20.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [SizedBox(height: 49.v), Opacity(opacity: 0.8, child: Text("lbl_history".tr, style: theme.textTheme.headlineSmall)), SizedBox(height: 38.v), _buildHistoryList(context)])))); } 
/// Section Widget
Widget _buildHistoryList(BuildContext context) { return Consumer(builder: (context, ref, _) {return ListView.separated(physics: NeverScrollableScrollPhysics(), shrinkWrap: true, separatorBuilder: (context, index) {return SizedBox(height: 20.v);}, itemCount: ref.watch(historyNotifier).historyModelObj?.historylistItemList.length ?? 0, itemBuilder: (context, index) {HistorylistItemModel model = ref.watch(historyNotifier).historyModelObj?.historylistItemList[index] ?? HistorylistItemModel(); return HistorylistItemWidget(model);});}); } 
 }
