import java.util.*;

public class PanagramSentence {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Sntence");
		String s = sc.nextLine();
		boolean isPanagram = checkPanagram(s);
		System.out.println(isPanagram ? "Sentence is a Pangram" : "Sentence is Not a Pangram");
	}

	public static boolean checkPanagram(String s) {
		HashMap<Character, Boolean> map = new HashMap();
		for (int i = 0; i < s.length(); i++)
			map.put(s.charAt(i), true);
		if (map.size() == 26)
			return true;
		return false;
	}
}
