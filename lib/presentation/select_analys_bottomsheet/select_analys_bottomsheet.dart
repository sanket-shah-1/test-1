import '../../core/app_export.dart';import 'models/select_analys_model.dart';import 'models/selectanalysgrid_item_model.dart';import 'provider/select_analys_provider.dart';import 'widgets/selectanalysgrid_item_widget.dart';class SelectAnalysBottomsheet extends StatefulWidget {const SelectAnalysBottomsheet({Key? key}) : super(key: key);

@override SelectAnalysBottomsheetState createState() =>  SelectAnalysBottomsheetState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => SelectAnalysProvider(), child: SelectAnalysBottomsheet()); } 
 }
class SelectAnalysBottomsheetState extends State<SelectAnalysBottomsheet> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SingleChildScrollView(child: Container(padding: EdgeInsets.symmetric(horizontal: 31.h, vertical: 46.v), child: Column(children: [Opacity(opacity: 0.8, child: Text("lbl_select_analys".tr, style: theme.textTheme.titleMedium)), SizedBox(height: 37.v), _buildSelectAnalysGrid(context), SizedBox(height: 72.v)]))); } 
/// Section Widget
Widget _buildSelectAnalysGrid(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 1.h), child: Consumer<SelectAnalysProvider>(builder: (context, provider, child) {return GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 171.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: provider.selectAnalysModelObj.selectanalysgridItemList.length, itemBuilder: (context, index) {SelectanalysgridItemModel model = provider.selectAnalysModelObj.selectanalysgridItemList[index]; return SelectanalysgridItemWidget(model);});})); } 
 }
