
dte.find.Action = 4
dte.find.FindWhat = "\\.SubItems(\\(\\d\\))"
dte.find.ReplaceWith = ".SubItems$1.text"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()



dte.find.Action = 4
dte.find.FindWhat = ".ClickEvent"
dte.find.ReplaceWith = ".click"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 0
dte.Find.ResultsLocation = 0
dte.find.Execute()

dte.find.Action = 4
dte.find.FindWhat = "(.*?)=\\s*new\\s*(.*?)datetimepicker(\(\))?\\s*\\r"
dte.find.ReplaceWith = "$0$1.Format =DateTimePickerFormat.Short\\r"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()


