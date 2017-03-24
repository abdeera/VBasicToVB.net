
dte.find.Action = 4 
dte.find.FindWhat = "(listview\\d).picture"
dte.find.ReplaceWith = "$1.backgroundimage"
dte.find.Target = 1 
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 1
dte.find.MatchInHiddenText = 1
dte.Find.SearchPath = "Current Document"
dte.find.PatternSyntax = 1 
dte.Find.ResultsLocation = 0 
dte.find.Execute()


dte.find.Action = 4 
dte.find.FindWhat = "(.+?)\\.scale(width|height)\\s*=\\s*(.+)"
dte.find.ReplaceWith = " temporary = $1.ClientSize : temporary.$2 = $3 : $1.ClientSize = temporary"
dte.find.Target = 1 
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 1
dte.find.MatchInHiddenText = 1
dte.Find.SearchPath = "Current Document"
dte.find.PatternSyntax = 1 
dte.Find.ResultsLocation = 0 
dte.find.Execute()



dte.find.Action = 4 
dte.find.FindWhat = "\\n\\s*(.+?)\\.drawwidth\\s*=\\s*(.+)"
dte.find.ReplaceWith = "\\n objpenwidth$1=$2"
dte.find.Target = 1 
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 1
dte.find.MatchInHiddenText = 1
dte.Find.SearchPath = "Current Document"
dte.find.PatternSyntax = 1 
dte.Find.ResultsLocation = 0 
dte.find.Execute()



dte.find.Action = 4 
dte.find.FindWhat = "([^\s]+?)\\.Line\\s*\\((.+?),(.+?)\\)\\s*-\\s*\\((.+?),(.+?)\\),\\s*([^\\s]*)\\s*\\n"
dte.find.ReplaceWith = " objpen=new pen(Color.FromArgb($6)): objpen.width=objpenwidth$1 : $1.CreateGraphics.DrawLine(objpen,$2,$3,$4,$5)\n"
dte.find.Target = 1 
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 1
dte.find.MatchInHiddenText = 1
dte.Find.SearchPath = "Current Document"
dte.find.PatternSyntax = 1 
dte.Find.ResultsLocation = 0 
dte.find.Execute()




dte.find.Action = 4 
dte.find.FindWhat = "(.+?)\\.cls\\(\\)"
dte.find.ReplaceWith = " $1.image=nothing"
dte.find.Target = 1 
dte.find.MatchCase = 0
dte.Find.MatchWholeWord = 1
dte.find.MatchInHiddenText = 1
dte.Find.SearchPath = "Current Document"
dte.find.PatternSyntax = 1 
dte.Find.ResultsLocation = 0 
dte.find.Execute()

