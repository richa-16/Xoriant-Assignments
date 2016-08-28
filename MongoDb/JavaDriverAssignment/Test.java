import org.bson.BSONObject;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;

public class Test {
	static MongoClient mongoClient;
	static DB db;
	static DBCollection coll;

	public static void main(String args[]) {
		// default connecting to the mongo
		// instance running on 27017 port
		mongoClient = new MongoClient();

		// connecti database
		db = mongoClient.getDB("Test");

		coll = db.getCollection("Orders");

		// all solutions
		solutionA();
		solutionB();
		solutionC();
		solutionD();

	}

	public static void solutionA() {

	}

	public static void solutionB() {

	}

	public static void solutionC() {
		System.out.println("Solution c ");
		DBCursor out = coll.find();

		int i = 0;
		while (out.hasNext()) {
			BSONObject data = out.next();
			String title = data.get("title").toString();

			double price = Double.parseDouble(data.get("price").toString());
			// System.out.println(price);

			double shippingCharges = Double
					.parseDouble(data.get("shipping_charges").toString());

			double totalPrice = price + shippingCharges;
			System.out
					.println("Title : " + title + " Total price " + totalPrice);
		}

	}

	public static void solutionD() {

	}
}
