package com.capg.main.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.DBRef;
@Document("orders")
public class Orders {
	@Id
	private String oid;
	@Field
	private String date;
	@Field
	private String customerName;
	@Field
	private String customerAddress;	
	@Field
	private Product product;
	
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orders(String oid, String date, String customerName,
			String customerAddress, Product product) {
		super();
		this.oid = oid;
		this.date = date;
		this.customerName = customerName;
		this.customerAddress = customerAddress;
		this.product=product;
	}

	public String getOid() {
		return oid;
	}

	public void setOid(String oid) {
		this.oid = oid;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	@Override
	public String toString() {
		return "Orders [oid=" + oid + ", Date=" + date + ", customerName=" + customerName + ", customerAddress=" + customerAddress + ", product=" + product
				+ "]";
	}
	
	
}
	