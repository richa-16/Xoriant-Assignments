import java.util.Arrays;

import org.bson.BSONObject;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
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
		System.out.println("Solution A");
		System.out.println();
		Iterable<DBObject> output = coll
				.aggregate(Arrays.asList((DBObject) new BasicDBObject("$group",
						new BasicDBObject("_id", "$location").append(
								"countOrders", new BasicDBObject("$sum", 1)))))
				.results();
		for (DBObject dbObject : output) {
			System.out.println(dbObject);
		}

	}

	public static void solutionB() {
		System.out.println("Solution B");
		System.out.println();
		Iterable<DBObject> output = coll
				.aggregate(Arrays.asList(
						(DBObject) new BasicDBObject("$unwind", "$items"),
						(DBObject) new BasicDBObject("$group",
								new BasicDBObject("_id", "$items").append(
										"countPerFruit",
										new BasicDBObject("$sum", 1)))))
				.results();
		for (DBObject dbObject : output) {
			System.out.println(dbObject);
		}
	}

	public static void solutionC() {
		
		System.out.println("Solution c ");
		System.out.println();
		DBCursor out = coll.find();
		
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
		System.out.println("Solution D");
		System.out.println();
		Iterable<DBObject> output = coll.aggregate(Arrays.asList(
				(DBObject) new BasicDBObject("$match",
						new BasicDBObject("status", "Open")),
				(DBObject) new BasicDBObject("$sort",
						new BasicDBObject("price", 1)),
				(DBObject) new BasicDBObject("$limit", 2)
				))
				.results();
		for (DBObject dbObject : output) {
			System.out.println(dbObject);
		}
	}

	public static void samples() {
		
		Iterable<DBObject> output = coll.aggregate(Arrays.asList(

				(DBObject) new BasicDBObject("$unwind", "$views"),
				(DBObject) new BasicDBObject("$match",
						new BasicDBObject("views.isActive", true)),
				(DBObject) new BasicDBObject("$sort",
						new BasicDBObject("views.date", 1)),
				(DBObject) new BasicDBObject("$limit", 200),
				(DBObject) new BasicDBObject("$project",
						new BasicDBObject("_id", 0)
								.append("directKey", "$views.directKey")
								.append("url", "$views.url")
								.append("date", "$views.date"))))
				.results();
	}
}
