export class Employees {
	constructor(
		public Id: string,
		public FirstName: string,
		public LastName: string,
		public Email: string,
		public Address: string,
		public Phone: string,
        public ImagePath: string) { }
}

export class Medias {
	constructor(
		public Id: string,
		public Name: string,
		public Type: string,
		public Location: string,
		public Phone: string,
        public ImagePath: string) { }
}