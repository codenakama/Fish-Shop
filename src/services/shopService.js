const possibleResponses = [
  { ok: true, status: 200, canLiveTogether: true },
  { ok: true, status: 200, canLiveTogether: false },
  { ok: false, status: 500, message: "Floaded" },
  { ok: false, status: 400, message: "Something wen't wrong" }
];

class ShopService {
  async checkCompatibility(basket, fishTank) {
    var randNumber = Math.floor(Math.random() * 4);
    const response = possibleResponses[randNumber];

    if (!response.ok) {
      throw new Error(
        `shopService service failed, HTTP status ${response.status}`
      );
    }

    return response.canLiveTogether;
  }
}

export default new ShopService();
