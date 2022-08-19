package pack.spring.integerate.react.IntegeratedSpringReact;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// Television tv=new Television(765,"huwai","kbk",234,34.5,"hd");
// sysout(tv)

@Entity
//@Table(name="monitors")
public class Television {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="stock_id")
	private int tvId;
	@Column(name="stock_name")
	private String model;
	@Column(name="stock_brand")
	private String brand;
	@Column(name="stock_cost")
	private int cost;
	@Column(name="stock_size")
	private double inches;
	@Column(name="stock_type")
	private String type;
	@Override
	public String toString() {
		return "Television [tvId=" + tvId + ", model=" + model + ", brand=" + brand + ", cost=" + cost + ", inches="
				+ inches + ", type=" + type + "]";
	}
	public Television() {
		
	}
	public Television(int tvId, String model, String brand, int cost, double inches, String type) {
		super();
		this.tvId = tvId;
		this.model = model;
		this.brand = brand;
		this.cost = cost;
		this.inches = inches;
		this.type = type;
	}
	public int getTvId() {
		return tvId;
	}
	public void setTvId(int tvId) {
		this.tvId = tvId;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public double getInches() {
		return inches;
	}
	public void setInches(double inches) {
		this.inches = inches;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}
