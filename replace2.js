
dte.find.Action = 4
dte.find.FindWhat = "\\.Ctlset_Enabled\\(([a-zA-Z0-9]+)\\)"
dte.find.ReplaceWith = ".Enabled=$1"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()


dte.find.Action = 4
dte.find.FindWhat = "\\.Ctlget_Enabled\\(\\)"
dte.find.ReplaceWith = ".Enabled"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()


dte.find.Action = 4
dte.find.FindWhat = ".SmallIcon"
dte.find.ReplaceWith = ".imagekey"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 0
dte.Find.ResultsLocation = 0
dte.find.Execute()



dte.find.Action = 4
dte.find.FindWhat = "VB6.Format"
dte.find.ReplaceWith = "Format"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 0
dte.Find.ResultsLocation = 0
dte.find.Execute()




dte.find.Action = 4
dte.find.FindWhat = "._value"
dte.find.ReplaceWith = ".value"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 0
dte.Find.ResultsLocation = 0
dte.find.Execute()




dte.find.Action = 4
dte.find.FindWhat = "\\.(DownClick|upclick)"
dte.find.ReplaceWith = ".SelectedItemChanged '''$1"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()






dte.find.Action = 4
dte.find.FindWhat = "\\s(.*?list.*?)\\.listitems"
dte.find.ReplaceWith = " $1.items "
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()



dte.find.Action = 4
dte.find.FindWhat = "\\s(.*?list.*?)\\.SelectedItem(\\s|\\.)"
dte.find.ReplaceWith = " $1.selecteditems(0)$2 "
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()


dte.find.Action = 4
dte.find.FindWhat = "\\.ListSubItems"
dte.find.ReplaceWith = ".subitems"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()



dte.find.Action = 4
dte.find.FindWhat = "([a-zA-Z0-9]*?)\\.Items.Add\\(([^,\\(,\\)]*?,)*([^,\\(,\\)]+?)\\)"
dte.find.ReplaceWith = "$1.Items.Add(new listviewitem ({$3},$2))"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 1
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()





dte.find.Action = 4
dte.find.FindWhat = "\\s([a-zA-Z0-9]+?)\\.listitems"
dte.find.ReplaceWith = " $1.items"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()