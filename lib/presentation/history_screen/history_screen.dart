import '../../core/app_export.dart';import 'models/history_model.dart';import 'models/historylist_item_model.dart';import 'provider/history_provider.dart';import 'widgets/historylist_item_widget.dart';class HistoryScreen extends StatefulWidget {const HistoryScreen({Key? key}) : super(key: key);

@override HistoryScreenState createState() =>  HistoryScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => HistoryProvider(), child: HistoryScreen()); } 
 }
class HistoryScreenState extends State<HistoryScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 20.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [SizedBox(height: 49.v), Opacity(opacity: 0.8, child: Text("lbl_history".tr, style: theme.textTheme.headlineSmall)), SizedBox(height: 38.v), _buildHistoryList(context)])))); } 
/// Section Widget
Widget _buildHistoryList(BuildContext context) { return Consumer<HistoryProvider>(builder: (context, provider, child) {return ListView.separated(physics: NeverScrollableScrollPhysics(), shrinkWrap: true, separatorBuilder: (context, index) {return SizedBox(height: 20.v);}, itemCount: provider.historyModelObj.historylistItemList.length, itemBuilder: (context, index) {HistorylistItemModel model = provider.historyModelObj.historylistItemList[index]; return HistorylistItemWidget(model);});}); } 
 }
