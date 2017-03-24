
dte.find.Action = 4
dte.find.FindWhat = "(.*?)\\.Formulas\\((\\d+)\\)\\s*=\\s*(.+?)\\s*\\n"
dte.find.ReplaceWith = "$1.set_Formulas($2,$3)\\n"
dte.find.Target = 1
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 0
dte.find.MatchInHiddenText = 1
dte.find.PatternSyntax = 1
dte.Find.ResultsLocation = 0
dte.find.Execute()


