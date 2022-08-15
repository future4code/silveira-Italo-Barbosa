


function AnagramaRevealing(s: any, t: any) {
	return s.split("").sort().join("") == t.split("").sort().join("")
}